package org.generation.app.controller;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.generation.app.service.AdminUserServiceImp;
import org.generation.app.service.IAdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // MVC
public class AppController {
		//Uso de la clase directamente
	//private AdminUserService adminUserService;
	//Si hago referencia a su clase pare o interfaz es mejor
	@Autowired
	private IAdminUserService adminUserService;
	
	/*
	 * En cada metodo tengo que crear un objeto para usar los métodos,
	 * cuando el método acaba, el objeto no se borra inmediatamente, sino que pasa
	 * un tiempo hasta que el garbarge collectctor lo borre. Para eviatr crear muchos objetos para cada método
	 * mejor usamos la inyeccción de dependencias, Spring crea el objeto y me
	 * pasa la referencia del objeto que está en el contenedor de spring con @autowire
	 * Spring sólo creo una, y me paso la referencia  
	 * */
	
	@GetMapping("/")
	public String indexController() {
		List<AdminUser> users;
		//adminUserService=new AdminUserServiceImp();
		users=adminUserService.users(); // me entrega el lostado
		System.out.println("Total de usuarios: "+users);
		return "index";
	}
	
	@GetMapping("/save-admin")
	public String saveAdmin(AdminUser adminUser) {
		//adminUserService=new AdminUserServiceImp();
		adminUserService.save(adminUser);
		return "edit-admin"; //Tendría que regresar otra página, pero para fines el ejercicio regreso el index
	}
}
