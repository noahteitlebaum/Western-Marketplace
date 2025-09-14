import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GenreatedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    private String password; // will be stored hashed

    // getters and setters
}