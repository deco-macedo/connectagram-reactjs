import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import ThemeContextProvider from "./hooks/useTheme";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https:github.com/gbpaixao.png",
      name: "Gustavo Bezerra",
      role: "CTO @ AirBnb"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-15 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https:github.com/virdes.png",
      name: "Virdes Medeiros",
      role: "Pleno Developer @ Nubank"
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal!' },
    { type: 'paragraph', content: 'Dêem uma olhada no meu LinkedIn, lá tem várias dicas de programação que vão ajudar os iniciantes na área! Espero vocês <3' },
    { type: 'link', content: 'linkedin.com' },
    ],
    publishedAt: new Date('2022-07-12 20:00:00'),
  },
]


function App() {
  
  return (
    <ThemeContextProvider>
      <div>      
        <Header />
        <div className="md:max-w-[70rem] md:my-4 md:mx-auto md:py-0 md:px-4 md:grid md:grid-cols-[256px_1fr] md:gap-[2rem] md:items-start grid-cols-1">
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
      </div>
    </ThemeContextProvider>
   )
}


export default App
