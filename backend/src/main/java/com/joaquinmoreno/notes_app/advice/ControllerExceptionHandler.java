package com.joaquinmoreno.notes_app.advice;

import com.joaquinmoreno.notes_app.service.NoteNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExceptionHandler {

    //Handle Not Found Notes
    @ExceptionHandler(NoteNotFoundException.class)
    public ResponseEntity<String> noteNotFoundHandler(NoteNotFoundException ex){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
    //Handle Invalid Notes
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> invalidNote(MethodArgumentNotValidException ex){
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getBindingResult().getFieldError().getDefaultMessage());
    }
}
