package org.generation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PruebaDB {

	public static void main(String[] args) {
		//En esta URL está el motor de la DB (localhost:port),  aqui selecciono  la base de datos colonial
		String url= "jdbc:mysql://localhost:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
		try {
			Connection conexion =DriverManager.getConnection(url,"root", "generation");
			//Instrucción es donde colocaré mi query
			Statement instruccion= conexion.createStatement(); //import java.sql.Statement;
			String query = "SELECT * FROM paleta WHERE nombre LIKE '%ti%';";
			String query2="CALL dorime";
			//Resultado tendrá el resulato de la query
			//ResultSet resultado=instruccion.executeQuery(query); //import java.sql.ResultSet;
			ResultSet resultado=instruccion.executeQuery(query2); //import java.sql.ResultSet;
			//me da un false si ya no tiene resultados esta línea
			while(resultado.next()) {
				//No empieza en cero, si no en uno
				//System.out.println("nombre:" +resultado.getInt(1));
				//System.out.println("\t nombre:" +resultado.getString(2));
				//Para el select result
				//System.out.print("nombre:" +resultado.getInt("idpaleta"));
				//System.out.println("\t nombre:" +resultado.getString("nombre"));
				System.out.print("nombre:" +resultado.getString("nombre"));
				System.out.print("\t sabor:" +resultado.getString("sabor"));
				System.out.println("\t precio:$" +resultado.getDouble("precio"));
			}
			resultado.close();
			instruccion.close();
			conexion.close();
			
		}catch(SQLException e) {
			System.out.println(e);
		}
	}

}
