package tn.kantra.projet.service.mapper;

import org.mapstruct.*;
import tn.kantra.projet.domain.Cours;
import tn.kantra.projet.service.dto.CoursDTO;

/**
 * Mapper for the entity {@link Cours} and its DTO {@link CoursDTO}.
 */
@Mapper(componentModel = "spring")
public interface CoursMapper extends EntityMapper<CoursDTO, Cours> {}
