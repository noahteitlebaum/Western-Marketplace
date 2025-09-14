import org.springframework.data.jpa.repository.JpaRepository;
import com.example.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
}