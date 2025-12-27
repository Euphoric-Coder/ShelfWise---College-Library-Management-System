// app/api/seed/route.js
import { db } from "@/lib/dbConfig";
import { books } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if books already seeded
    const existing = await db.select().from(books);
    if (existing.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Books already seeded.",
        count: existing.length,
      });
    }

    const seedBooks = [
      {
        title: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        genre: "Computer Science",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/61XB5el5X-L._UF1000,1000_QL80_.jpg",
        coverColor: "#f2d4c2",
        description:
          "An encyclopedic multi-volume work covering algorithms, combinatorics, and mathematical techniques.",
        totalCopies: 8,
        available_copies: 8,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Considered one of the most rigorous CS texts ever written, TAOCP is a monumental exploration of algorithmic theory.",
        coverUrlId: null,
      },
      {
        title: "Operating System Concepts",
        author: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
        genre: "Operating Systems",
        rating: 4,
        coverUrl:
          "https://m.media-amazon.com/images/I/81SwKCia7VL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#c5d1eb",
        description:
          "A foundational guide to operating systems, covering processes, memory, file systems, and concurrency.",
        totalCopies: 22,
        available_copies: 22,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Commonly known as the Dinosaur Book, it covers OS principles with real-world examples from Linux, Windows, and macOS. It's widely used in academic OS courses.",
        coverUrlId: null,
      },
      {
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        genre: "Interview Prep",
        rating: 5,
        coverUrl:
          "https://rukminim2.flixcart.com/image/480/640/kpinwy80/book/y/7/w/cracking-the-coding-interview-189-programming-questions-and-original-imag3qh8hpmzuwza.jpeg?q=90",
        coverColor: "#b0d7e6",
        description:
          "A comprehensive guide for coding interviews with 189+ programming questions and solutions.",
        totalCopies: 40,
        available_copies: 40,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Perfect for technical interview preparation, covering data structures, algorithms, behavioral questions, and interview strategies.",
        coverUrlId: null,
      },
      {
        title: "The Mythical Man-Month",
        author: "Frederick P. Brooks Jr.",
        genre: "Software Engineering",
        rating: 4,
        coverUrl: "https://m.media-amazon.com/images/I/817iWsLJR0L.jpg",
        coverColor: "#e3e9e1",
        description:
          "A collection of essays on software project management, including the famous law: adding manpower to a late project makes it later.",
        totalCopies: 9,
        available_copies: 9,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Brooks shares timeless lessons from major software engineering projects, emphasizing planning, communication, and realistic scheduling.",
        coverUrlId: null,
      },
      {
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        genre: "Machine Learning",
        rating: 4,
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGNIxSWLywQC4SlbMHPu0T544acdyxcO7lw&s",
        coverColor: "#202020",
        description:
          "A definitive book on deep learning theory and applications written by leading experts.",
        totalCopies: 15,
        available_copies: 15,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Covering neural networks, optimization, convolutional models, and modern AI techniques, this book serves as a core resource for anyone serious about deep learning research or practice.",
        coverUrlId: null,
      },
      {
        title: "Introduction to Algorithms",
        author:
          "Thomas H. Cormen, Charles Leiserson, Ronald Rivest, Clifford Stein",
        genre: "Algorithms",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/61O6K0yPmzL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#c8e0d8",
        description:
          "A comprehensive textbook covering essential algorithms and data structures with mathematical rigor.",
        totalCopies: 20,
        available_copies: 20,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Often referred to as CLRS, this book provides in-depth explanations of algorithms ranging from sorting to graph theory. Its detailed proofs and exercises make it ideal for computer science students and practitioners.",
        coverUrlId: null,
      },
      {
        title: "Python Crash Course",
        author: "Eric Matthes",
        genre: "Programming",
        rating: 4,
        coverUrl:
          "https://m.media-amazon.com/images/I/71uiG3qqKaL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#ffefc1",
        description:
          "A hands-on introduction to Python with projects like games, web apps, and data visualization.",
        totalCopies: 18,
        available_copies: 18,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This beginner-friendly book teaches Python basics then transitions to practical projects using Django, Pygame, and Plotly.",
        coverUrlId: null,
      },
      {
        title: "Database System Concepts",
        author: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan",
        genre: "Databases",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/81B3Cv13cYL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#ead5c7",
        description:
          "A detailed introduction to database models, SQL, normalization, and distributed databases.",
        totalCopies: 16,
        available_copies: 16,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This book provides a thorough understanding of transactional processing, relational algebra, and modern developments like NoSQL and big data architecture.",
        coverUrlId: null,
      },
      {
        title: "Reinforcement Learning: An Introduction",
        author: "Richard S. Sutton & Andrew G. Barto",
        genre: "Machine Learning",
        rating: 5,
        coverUrl: "https://m.media-amazon.com/images/I/71nk3rOK3jL.jpg",
        coverColor: "#ffe4d1",
        description:
          "The foundational textbook on reinforcement learning, covering MDPs, value functions, and policy optimization.",
        totalCopies: 14,
        available_copies: 14,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Sutton and Barto walk through essential RL algorithms like Q-learning and policy gradients, shaping how modern RL is taught today.",
        coverUrlId: null,
      },
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        genre: "Software Development",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/71Nxk9VhSTL._UF1000,1000_QL80_.jpg",
        coverColor: "#f3ede4",
        description:
          "A classic book offering practical advice and philosophical insights for becoming a better programmer.",
        totalCopies: 14,
        available_copies: 14,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This book helps developers think systematically, adopt craftsmanship habits, automate workflows, and continuously improve—making it highly influential in modern software engineering culture.",
        coverUrlId: null,
      },
      {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell and Peter Norvig",
        genre: "Artificial Intelligence",
        rating: 4,
        coverUrl:
          "https://m.media-amazon.com/images/I/61nHC3YWZlL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#c7cdd9",
        description:
          "A leading textbook on artificial intelligence, offering a deep dive into algorithms, machine learning, and robotics, suitable for both beginners and professionals.",
        totalCopies: 10,
        available_copies: 10,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Artificial Intelligence: A Modern Approach is a comprehensive guide to the field of AI, combining foundational concepts with cutting-edge research. The book covers topics like search algorithms, knowledge representation, machine learning, and robotics.\n\nIts clear explanations and practical examples make it a valuable resource for students, researchers, and industry professionals. By bridging theory and application, this book serves as a cornerstone for understanding and advancing AI technologies.\n\nThe book is suitable for both beginners and professionals, offering a deep understanding of the fundamental concepts and applications of AI.",
        coverUrlId: null,
      },
      {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        genre: "Software Architecture",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/81gtKoapHFL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#e8dfc6",
        description:
          "A foundational book introducing classic design patterns for building robust object-oriented systems.",
        totalCopies: 12,
        available_copies: 12,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Widely known as the 'Gang of Four' book, it formalized common solutions to recurring design problems. Its catalog of structural, creational, and behavioral patterns is essential for building scalable and maintainable software systems.",
        coverUrlId: null,
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Software Engineering",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/41SH-SvWPxL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        coverColor: "#d3e1f0",
        description:
          "A handbook of agile software craftsmanship focusing on writing clean, maintainable code.",
        totalCopies: 18,
        available_copies: 18,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Clean Code teaches developers how to write readable, efficient, and maintainable code through best practices, principles, and case studies. It emphasizes refactoring, naming conventions, and testing strategies crucial for long-term software sustainability.",
        coverUrlId: null,
      },
      {
        title: "Computer Networking: A Top-Down Approach",
        author: "James F. Kurose and Keith W. Ross",
        genre: "Networking",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/91hg1HHyiWL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#f7a13e",
        description:
          "A comprehensive introduction to computer networking, using a top-down approach to explain protocols, architecture, and applications.",
        totalCopies: 25,
        available_copies: 25,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/1107129903/preview/stock-footage-an-open-book-is-on-fire-big-bright-flame-burning-paper-on-old-publication-in-the-dark-book.webm",
        summary:
          "'Computer Networking: A Top-Down Approach' provides a thorough and accessible introduction to the world of computer networks. James Kurose and Keith Ross present networking concepts by starting with high-level applications and gradually moving down to the underlying layers.\n\nWith coverage of HTTP, DNS, TCP/IP, and security, along with real-world scenarios and exercises, this book remains relevant for students and professionals seeking deep networking expertise.",
        coverUrlId: null,
      },
      {
        title: "Compilers: Principles, Techniques, and Tools",
        author: "Aho, Lam, Sethi, Ullman",
        genre: "Compilers",
        rating: 4,
        coverUrl: "https://m.media-amazon.com/images/I/71MvtEJneKL.jpg",
        coverColor: "#c8c4ec",
        description:
          "The classic 'Dragon Book' covering lexical analysis, parsing, optimization, and code generation.",
        totalCopies: 10,
        available_copies: 10,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This foundational text teaches compiler construction through detailed theory and practical techniques.",
        coverUrlId: null,
      },
      {
        title: "Structure and Interpretation of Computer Programs",
        author: "Harold Abelson & Gerald Jay Sussman",
        genre: "Computer Science",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/71xZu1kgXJL._UF1000,1000_QL80_.jpg",
        coverColor: "#e4c9f2",
        description:
          "A pioneering computer science book emphasizing abstraction and functional programming.",
        totalCopies: 12,
        available_copies: 12,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Popularly called SICP, it teaches core CS principles using Scheme and focuses on computation models, recursion, interpreters, and abstraction.",
        coverUrlId: null,
      },
      {
        title: "Refactoring: Improving the Design of Existing Code",
        author: "Martin Fowler",
        genre: "Software Engineering",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/71yPDDIwcoL._UF1000,1000_QL80_.jpg",
        coverColor: "#ddece0",
        description:
          "A guide to restructuring codebases safely using proven refactoring patterns.",
        totalCopies: 11,
        available_copies: 11,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "The book explains how to identify code smells, apply refactorings, and maintain software quality over time.",
        coverUrlId: null,
      },
      {
        title: "Algorithms to Live By",
        author: "Brian Christian & Tom Griffiths",
        genre: "Non-Fiction",
        rating: 4,
        coverUrl: "https://m.media-amazon.com/images/I/81EI+ELW9EL.jpg",
        coverColor: "#f2ffef",
        description:
          "A fascinating look at how computer science algorithms can solve everyday human problems.",
        totalCopies: 17,
        available_copies: 17,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "The authors explain concepts like optimal stopping, caching, and scheduling through real-life scenarios, making CS accessible to everyone.",
        coverUrlId: null,
      },
      {
        title: "You Don't Know JS Yet",
        author: "Kyle Simpson",
        genre: "JavaScript",
        rating: 4,
        coverUrl:
          "https://m.media-amazon.com/images/I/71GsZGf3opL._UF1000,1000_QL80_.jpg",
        coverColor: "#ffe79a",
        description:
          "An in-depth exploration of JavaScript mechanics, covering scope, closures, async, and prototypes.",
        totalCopies: 30,
        available_copies: 30,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This series gives developers a deep understanding of JS internals, empowering them to write more predictable and efficient code.",
        coverUrlId: null,
      },
      {
        title: "Network Security Essentials",
        author: "William Stallings",
        genre: "Security",
        rating: 4,
        coverUrl: "https://m.media-amazon.com/images/I/712Dyd6BXEL.jpg",
        coverColor: "#dce7f8",
        description:
          "An introduction to fundamental cybersecurity principles and cryptographic techniques.",
        totalCopies: 12,
        available_copies: 12,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This book explains authentication, encryption, network attacks, and defense strategies in a simple, structured manner.",
        coverUrlId: null,
      },
      {
        title: "Machine Learning Yearning",
        author: "Andrew Ng",
        genre: "Machine Learning",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1480798569i/30741739.jpg",
        coverColor: "#eaf7ff",
        description:
          "A practical guide on structuring machine learning projects effectively.",
        totalCopies: 30,
        available_copies: 30,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "Andrew Ng explains strategies for error analysis, ML workflows, supervised learning formulation, and organizing datasets.",
        coverUrlId: null,
      },
      {
        title:
          "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
        author: "Aurélien Géron",
        genre: "Machine Learning",
        rating: 5,
        coverUrl:
          "https://m.media-amazon.com/images/I/71UF9mDAX3L._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#f4e5c2",
        description:
          "A practical guide for building real-world machine learning and deep learning applications.",
        totalCopies: 28,
        available_copies: 28,
        videoUrl:
          "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
          "This project-focused book bridges theory and implementation using Python, NumPy, Scikit-Learn, TensorFlow, and Keras.",
        coverUrlId: null,
      },
    ].map((book) => ({
      ...book,
      availableCopies: book.totalCopies, // auto-fill
    }));

    // Insert books into DB
    await db.insert(books).values(seedBooks);

    return NextResponse.json({
      success: true,
      message: "Books seeded successfully!",
      count: seedBooks.length,
    });
  } catch (error) {
    console.error("Seed Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Seeding failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
