import { useState } from "react";

function validateEmail(name) {
    if (name.trim()) {
        return "Name is required";
    }
    if (name.trim().length < 2) {
        return "Name must be at least 2 characters";
    }
    return"";
}
function validateEmail(email) {
    if (email.trim()) {
        return "Email is required";
    }
    const em