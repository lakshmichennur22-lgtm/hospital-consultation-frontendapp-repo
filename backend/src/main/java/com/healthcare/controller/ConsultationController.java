package com.healthcare.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping("/consultations")
@CrossOrigin(origins = "*")
public class ConsultationController {

    private final JdbcTemplate jdbcTemplate;

    // ✅ Let Spring Boot AUTO-INJECT the H2 DataSource
    public ConsultationController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // ✅ Create table automatically in H2
    @PostConstruct
    public void init() {
        jdbcTemplate.execute("CREATE TABLE IF NOT EXISTS consultations (" +
                "id VARCHAR(36) PRIMARY KEY," +
                "name VARCHAR(100)," +
                "age VARCHAR(10)," +
                "contact VARCHAR(50)," +
                "doctor VARCHAR(100)," +
                "date VARCHAR(20)," +
                "reason VARCHAR(255)," +
                "symptoms VARCHAR(255)" +
                ")");
    }

    // ✅ GET all consultations
    @GetMapping
    public List<Map<String, String>> getConsultations() {
        return jdbcTemplate.query("SELECT * FROM consultations", new RowMapper<Map<String, String>>() {
            @Override
            public Map<String, String> mapRow(ResultSet rs, int rowNum) throws SQLException {
                Map<String, String> consultation = new HashMap<>();
                consultation.put("id", rs.getString("id"));
                consultation.put("name", rs.getString("name"));
                consultation.put("age", rs.getString("age"));
                consultation.put("contact", rs.getString("contact"));
                consultation.put("doctor", rs.getString("doctor"));
                consultation.put("date", rs.getString("date"));
                consultation.put("reason", rs.getString("reason"));
                consultation.put("symptoms", rs.getString("symptoms"));
                return consultation;
            }
        });
    }
    @GetMapping("/health")
    public String health() {
        return "OK";
    }
    // ✅ POST new consultation
    @PostMapping
    public Map<String, String> bookConsultation(@RequestBody Map<String, String> consultation) {
        String id = UUID.randomUUID().toString();

        jdbcTemplate.update(
                "INSERT INTO consultations (id, name, age, contact, doctor, date, reason, symptoms) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                id,
                consultation.get("name"),
                consultation.get("age"),
                consultation.get("contact"),
                consultation.get("doctor"),
                consultation.get("date"),
                consultation.get("reason"),
                consultation.get("symptoms")
        );

        consultation.put("id", id);
        return consultation;
    }
}
