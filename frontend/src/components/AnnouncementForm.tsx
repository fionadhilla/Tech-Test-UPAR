import { useState } from "react";
import { useCreateAnnouncement } from "../api/announcements";
import type { TargetRole } from "../types";

import BASE from "../api/client"; // Import BASE_URL from client.ts

// TODO(candidate): implement this component.
//
// Requirements:
//   - Fields: title (text), content (textarea), target_role (select: student
//     / lecturer / all).
//   - Client-side validation before submitting: title is required and must be
//     200 characters or fewer. Show the validation error inline — do not rely
//     on the backend error alone.
//   - On submit, call useCreateAnnouncement()'s mutate function.
//   - While the mutation is pending, disable the submit button.
//   - On success, clear the form. On error (e.g. backend validation failure),
//     show the error message returned by the API.
export function AnnouncementForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [targetRole, setTargetRole] = useState<TargetRole>("all");

  void title;
  void content;
  void targetRole;

  const handleAddTask = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    try {
      const res = await fetch(BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, content: content, target_role: targetRole }),
      });
      if (res.ok) {
        setTitle('');
        setContent('');
        setTargetRole('all');
      }
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return <form onSubmit={handleAddTask} style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Tambah tugas baru..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ flex: 1, padding: '8px' }}
          />
          <button type="submit" style={{ padding: '8px 16px' }}>Tambah Task</button>
        </form>;



}
