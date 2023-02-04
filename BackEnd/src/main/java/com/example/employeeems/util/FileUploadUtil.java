package com.example.employeeems.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FileUploadUtil {
    public static void saveFile(String uploadDir, String fileName, MultipartFile multipartFile) throws IOException {

        String allResourcesDir = "/media/hasindu/New Volume/Learn/Springboot - LinuxMint/employeeems/src/main/resources/static/";
        Path uploadPath = Paths.get(allResourcesDir + uploadDir); // add path
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        try(InputStream inputStream = multipartFile.getInputStream()) {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }catch (IOException ioException){

        }
    }
}
