package com.joaquinmoreno.notes_app.service;

import com.joaquinmoreno.notes_app.model.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {

    public Note saveNote(Note note);
    public Note findById(Long id);
    public List<Note> getNotes(Boolean isArchived);

    public void deleteNote(Long id);

    public Note updateNote(Long id,Note note);

    public Note archiveNote(Long id);

}
