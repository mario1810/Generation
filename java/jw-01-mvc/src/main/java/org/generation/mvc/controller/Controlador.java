package org.generation.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller //Para utilizar MVC y no REST (Controlador para hacerse cargo de las peticiones)
public class Controlador {
//	@GetMapping("/")// Esto va funcionar: localhost:port/
//	public String inicio() {
//		return "index"; // Que vista deseo usar (index.html)
	//A View is responsible for rendering the HTML content. 
//	}
	
//	@GetMapping("/usuarios")// Esto va funcionar: localhost:port/usuarios
//	public String usuarios() {
//		return "usuarios"; // Que vista deseo usar (usuario.html)
//	}
	
	/*
	 *  You will build an application that has a static home page and that will also accept HTTP GET requests at: http://localhost:8080/greeting.
	 *	It will respond with a web page that displays HTML. The body of the HTML will contain a greeting: “Hello, World!”
	 *	You can customize the greeting with an optional name parameter in the query string. The URL might then be http://localhost:8080/greeting?name=User.
	 *	The name parameter value overrides the default value of World and is reflected in the response by the content changing to “Hello, User!”
	 * 
	 * */
	
	@GetMapping("/greeting") //handles GET requests for /greeting by returning the name of a View
	public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) { //@RequestParam binds the value of the query string parameter name into the name parameter of the greeting() method.
		//This query string parameter is not required. If it is absent in the request, the defaultValue of World is used. The value of the name parameter is added to a Model object, ultimately making it accessible to the view template.
		model.addAttribute("name", name); 
		return "greeting"; // A View is responsible for rendering the HTML content. The following listing (from
	}
	
}
