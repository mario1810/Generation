package org.generation.app.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class PagoJs implements Serializable{
	
		private static final long serialVersionUID = 1L;
		
		public int costoTotal;
		public Long nombreUsuario;
		public String nombreCategoria;
		public String nombrePaquete;
		
}
