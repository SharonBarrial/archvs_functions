import com.github.javafaker.Faker;
import com.github.javafaker.service.FakeValuesService;
public class Worker {
	public String nombre;
	public String apellido;
	public String cargo;
	public String empresa;
	public Direccion addr;
	public String telefono;
	public Worker() {
		Faker faker= new Faker();
		this.nombre= faker.name().firstName();
		this.apellido= faker.name().lastName();
		this.empresa= faker.company().name();
		this.telefono= faker.phoneNumber().phoneNumber();
		Direccion addr= new Direccion();
		addr.calle= faker.address().streetAddress();
		addr.ciudad= faker.address().city();
		addr.estado= faker.address().state();
		addr.pais=faker.address().country();
		this.addr=addr;
			
	}

}
