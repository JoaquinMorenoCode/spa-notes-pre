package com.joaquinmoreno.notes_app.controller;
import com.joaquinmoreno.notes_app.model.Note;
import com.joaquinmoreno.notes_app.service.NoteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin

@RestController
@RequestMapping("/notes")
public class NoteController {

    @Autowired
    private NoteServiceImpl noteService;

    @PostMapping("/create")
    public ResponseEntity<Note> createNote(@Validated @RequestBody Note note){
        return ResponseEntity.ok().body(noteService.saveNote(note));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Note> editNote(@PathVariable Long id, @Validated @RequestBody Note note){
        return ResponseEntity.ok().body(noteService.updateNote(id,note));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(@PathVariable Long id){
        noteService.deleteNote(id);
        return ResponseEntity.ok().body("Note deleted");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Note> archiveNote(@PathVariable Long id){

        return ResponseEntity.ok().body(noteService.archiveNote(id));

    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNote(@PathVariable Long id){
        return ResponseEntity.ok().body(noteService.findById(id));

    }


    @GetMapping("")
    public ResponseEntity<List<Note>> getNotes(@RequestParam(value = "archived",defaultValue = "false") Boolean isArchived){
        return ResponseEntity.ok().body(noteService.getNotes(isArchived));

    }
}
