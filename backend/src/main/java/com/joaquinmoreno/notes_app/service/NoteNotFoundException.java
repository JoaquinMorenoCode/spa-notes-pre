package com.joaquinmoreno.notes_app.service;

public class NoteNotFoundException extends RuntimeException {

    public NoteNotFoundException(Long id){
        super("Could not find note with id: "+ id);
    }
}
