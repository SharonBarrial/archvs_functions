import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


public class Generador {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		final List<Worker> empleados = new ArrayList<>();
		for (int i=0; i<=100 ;i++) {
			empleados.add(new Worker());
		}

		Gson gson = new GsonBuilder().setPrettyPrinting().create();

		// Convertir la lista completa de trabajadores en JSON
		String data = gson.toJson(empleados);

		// Imprimir el JSON en la consola
		System.out.println(data);

		// Guardar el JSON en el archivo workers.json
		try (FileWriter writer = new FileWriter("workers.json")) {
			writer.write(data); // Escribir el JSON en el archivo
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}



