package org.generation.app.service;

import java.util.List;

import org.generation.app.model.AdminUser;

public interface IAdminUserService {
	
	//Método que entrega la lista de usuarios
	public List<AdminUser> users();
	// se guarda el objeto
	public void save (AdminUser adminUser);
	// Se crea el objeto
	public void delete (AdminUser adminUser);
	//Se buscará un objeto
	public AdminUser findAdminUser(AdminUser adminUser);
	
	
}
