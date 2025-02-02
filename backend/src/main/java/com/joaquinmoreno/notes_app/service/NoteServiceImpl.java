package com.joaquinmoreno.notes_app.service;

import com.joaquinmoreno.notes_app.model.Note;
import com.joaquinmoreno.notes_app.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    NoteRepository noteRepository;
    //save notes
    @Override
    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public Note findById(Long id) {

        return noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
    }

    @Override
    public List<Note> getNotes(Boolean isArchived) {
        return noteRepository.findByIsArchived(isArchived);
    }

    //Delete Notes
    @Override
    public void deleteNote(Long id) {
        noteRepository.findById(id).ifPresentOrElse(
                note -> noteRepository.deleteById(id),
                () -> { throw new NoteNotFoundException(id); }
        );
    }

    //Edit Notes
    @Override
    public Note updateNote(Long id, Note note) {
        return noteRepository.findById(id).map(
                noteToUpdate -> {
                    noteToUpdate.setTitle(note.getTitle());
                    noteToUpdate.setBody(note.getBody());
                    noteToUpdate.setIsArchived(note.getIsArchived());
                    return noteRepository.save(noteToUpdate);
                }
        ).orElseThrow(() -> new NoteNotFoundException(id));

    }

    //Archive or unarchive Notes
    @Override
    public Note archiveNote(Long id) {
        return noteRepository.findById(id).map(
                noteToUpdate -> {
                    noteToUpdate.setIsArchived(!noteToUpdate.getIsArchived());
                    return noteRepository.save(noteToUpdate);
                }
        ).orElseThrow(() -> new NoteNotFoundException(id));    }


}
