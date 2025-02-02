package com.joaquinmoreno.notes_app.repository;

import com.joaquinmoreno.notes_app.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {

    List<Note> findByIsArchived(boolean Archived);

    Optional<Note> findById(Long id);

}
