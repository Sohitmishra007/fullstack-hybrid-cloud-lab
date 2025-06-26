package com.example.taskbackend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final List<Map<String, String>> tasks = new ArrayList<>();

    @GetMapping
    public List<Map<String, String>> getTasks() {
        return tasks;
    }

    @PostMapping
    public void addTask(@RequestBody Map<String, String> task) {
        tasks.add(task);
    }
}

