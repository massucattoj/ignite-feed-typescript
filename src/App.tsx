import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/21963514?v=4",
      name: "Jean Massucatto",
      role: "Fullstack Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2024-05-29 23:15:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/12356557?v=4",
      name: "Emanoeli Doe",
      role: "Backend Developer"
    },
    content: [
      { type: "paragraph", content: "Hey everyone! 👋"},
      { type: "paragraph", content: "Just launched my latest project, a blog template called TechBlog 🚀"},
      { type: "link", content: "johnsportfolio.com/techblog"},
    ],
    publishedAt: new Date("2024-06-10 10:30:00")
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/16109171?v=4",
      name: "Higor Smith",
      role: "UX/UI Designer"
    },
    content: [
      { type: "paragraph", content: "Hello friends! 👋"},
      { type: "paragraph", content: "Excited to share my latest design project, a mobile app for fitness tracking called FitLife 🚀"},
      { type: "link", content: "alicesdesigns.com/fitlife"},
    ],
    publishedAt: new Date("2024-06-15 15:45:00")
  }
];

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
