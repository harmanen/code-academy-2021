package com.example.demo.controllers;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import com.example.demo.models.IHasId;

import org.springframework.web.server.ResponseStatusException;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class CrudController<T extends IHasId<Long>, R extends JpaRepository<T, Long>> {
    protected final R repository;

    CrudController(R repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public List<T> getAll() {
        return this.repository.findAll();
    }

    @GetMapping("/{id}")
    public T getOne(@PathVariable Long id) {
        return this.repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not entity with id " + id));
    }

    @PostMapping("/")
    public T add(@RequestBody T newEntity) {
        return this.repository.save(newEntity);
    }

    @PutMapping("/{id}")
    public T replace(@RequestBody T newEntity, @PathVariable Long id) {
        newEntity.setId(id);
        return this.repository.save(newEntity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        try {
            this.repository.deleteById(id);
        } catch (DataAccessException error) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not entity with id " + id);
        }
    }

    @PatchMapping("/{id}")
    public T patch(@RequestBody T newEntity, @PathVariable Long id) {
        T oldEntity = this.getOne(id);
        var methods = newEntity.getClass().getDeclaredMethods();
        for (var method : methods) {
            if (method.getName().startsWith("get") && !method.getName().equals("getId")) {

                try {
                    var value = method.invoke(newEntity);
                    if (value != null) {
                        var setMethodName = method.getName().replaceFirst("get", "set");
                        var setMethod = oldEntity.getClass().getDeclaredMethod(setMethodName, value.getClass());
                        setMethod.invoke(oldEntity, value);
                    }
                } catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException
                        | NoSuchMethodException | SecurityException e) {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not patch entity with " + id);
                }
            }
        }

        return this.repository.save(oldEntity);
    }

}
