package tn.kantra.projet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.kantra.projet.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
