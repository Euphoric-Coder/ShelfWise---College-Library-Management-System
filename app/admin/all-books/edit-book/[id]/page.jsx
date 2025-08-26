import EditBookPage from '@/components/Admin/EditBookPage';
import React from 'react'

const page = () => {
  const bookData = {
    id: "1",
    title: "The Great Reclamation: A Novel by",
    author: "Rachel Hxeng",
    genre: "Strategic, Fantasy",
    dateCreated: "Dec 19 2023",
    totalBooks: 120,
    coverUrl:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    primaryColor: "#C4214C",
    summary:
      "People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.\n\nHarriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their",
  };
  return (
    <div>
      <EditBookPage bookData={bookData} />
    </div>
  )
}

export default page