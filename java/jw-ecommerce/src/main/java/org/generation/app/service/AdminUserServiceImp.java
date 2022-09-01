package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;
import org.springframework.stereotype.Service;

@Service
public class AdminUserServiceImp implements IAdminUserService{

	@Override
	public List<AdminUser> users() {
		// Se hace uso de los métodosambi de la capa DAO
		System.out.println("Se enlista los usuarios");
		return null;
	}

	@Override
	public void save(AdminUser adminUser) {
		// Se hace uso de los métodos de la capa DAO
		System.out.println("Guarada  el objeto de la base de datos");
		
	}

	@Override
	public void delete(AdminUser adminUser) {
		// Se hace uso de los métodos de la capa DAO
				System.out.println("Elimina  el objeto de la base de datos");
		
	}

	@Override
	public AdminUser findAdminUser(AdminUser adminUser) {
		// Se hace uso de los métodos de la capa DAO
		System.out.println("Encuentra el objeto indicado en la base de datos");
		return null;
	}

	
}
