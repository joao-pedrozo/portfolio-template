"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Masonry from "react-masonry-css"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, ExternalLink } from "lucide-react"
import { ProjectModal } from "@/components/project-modal"
import content from "@/data/content.json"

export default function LinkTreeGallery() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<(typeof content.galleryItems)[0] | null>(null)
  const [activeTab, setActiveTab] = useState<"connect" | "gallery">("connect")

  useEffect(() => {
    setMounted(true)
  }, [])

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <header className="pt-16 pb-8 px-4 text-center">
        <Image
          src={content.profile.avatarUrl || "/placeholder.svg"}
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{content.profile.name}</h1>
        <p className="text-xl mb-4">{content.profile.tagline}</p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Button
            onClick={() => setActiveTab("connect")}
            variant={activeTab === "connect" ? "default" : "outline"}
            className="mr-2"
          >
            Connect With Me
          </Button>
          <Button onClick={() => setActiveTab("gallery")} variant={activeTab === "gallery" ? "default" : "outline"}>
            My Gallery
          </Button>
        </div>

        {activeTab === "connect" && (
          <section className="mb-12">
            <div className="flex flex-col items-center space-y-4">
              {content.links.map((link, index) => (
                <Button
                  key={index}
                  className="w-full max-w-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  variant="outline"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center"
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </section>
        )}

        {activeTab === "gallery" && (
          <section>
            {mounted && (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
              >
                {content.galleryItems.map((item, index) => (
                  <div key={index} className="mb-4 cursor-pointer" onClick={() => setSelectedProject(item)}>
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md hover:opacity-80 transition-opacity"
                    />
                    <h3 className="mt-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </Masonry>
            )}
          </section>
        )}
      </main>

      <footer className="mt-12 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} {content.profile.name}. All rights reserved.
        </p>
      </footer>

      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
    </div>
  )
}

