package or.generation.holamundo.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import or.generation.holamundo.entity.Persona;

@RestController //Para poder betner el JSON
public class Controlador {
	
	@GetMapping("/dorime") //localhost:port/dorime (cuando el usuario meta esta dirección, se ejecuta esta función)
	public String dorime() {
		return "Dorime en la CH14";
	}
	
	@GetMapping("/dorimePersona") //localhost:port/dorime (cuando el usuario meta esta dirección, se ejecuta esta función)
	public Persona dorimePersona() {
		Persona patricio= new Persona();
		patricio.setNombre("Patricio");
		patricio.setApellido("Apellido");
		return patricio;
	}
	
	@GetMapping("/dorimepersona/listado")
	public ArrayList<Persona> dorimePersonaList() {
		ArrayList<Persona> personas = new ArrayList<Persona>();
		Persona patricio = new Persona();
		patricio.setNombre("Patrick");
		patricio.setApellido("Star");
		//patricio.setEdad(198);
		Persona esponjaGar = new Persona();
		esponjaGar.setApellido("Squarepants");
		esponjaGar.setNombre("Boob");
		//esponjaGar.setEdad(197);
		Persona calamardo = new Persona();
		calamardo.setNombre("Squidward");
		calamardo.setApellido("Tentacles");
		//calamardo.setEdad(300);
		personas.add(esponjaGar);
		personas.add(calamardo);
		personas.add(patricio);
		
		return personas;
	}


}
