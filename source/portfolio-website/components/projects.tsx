"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ProjectModal from "./project-modal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "쇼티 - 숏폼 영상 서비스",
      year: "2024",
      description: "프로메테우스 해커톤. 롱폼 영상을 숏폼으로 만들어주는 ai 사이트 (현재 비공개 상태)",
      detailedDescription:
        "프로메테우스 해커톤에서 개발한 AI 기반 편집 웹 서비스입니다. 사용자가 업로드한 롱폼 영상을 AI가 분석하여 자동으로 하이라이트를 추출하고 숏폼 영상으로 변환해주는 플랫폼입니다. React와 Python을 활용하여 프론트엔드와 AI 모델을 연동했습니다. 프론트엔드 파트를 맡아 제작했지만 현재 깃허브 사이트는 비공개 상태입니다.",
      url: "https://github.com/infoelectric/test.git",
      image: "/쇼티1.png",
      images: [
        "/쇼티1.png",
        "/쇼티2.png",
        "/쇼티3.png",
      ],
      technologies: ["React", "Python", "AI/ML", "Video Processing"],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "백준 오답노트 Solver",
      year: "2024",
      description: "멋쟁이사자처럼 인하대 해커톤. 백준 풀이를 위한 오답노트 사이트",
      detailedDescription:
        "멋쟁이사자처럼 인하해커톤, 백준 오답노트 SOLVER는 코딩 공부를 더욱 효율적으로 할 수 있도록 설계된 웹사이트입니다. 틀린 문제를 복습하고, 다른 사람의 풀이를 검색 및 공유할 수 있는 기능을 제공합니다.",
      url: "https://github.com/yerroong/inha_likelion_hackathon4.git",
      image: "/백준1.png",
      images: [
        "/백준1.png",
        "/백준2.png",
        "/백준3.png",
        "/백준4.png",
      ],
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      color: "from-green-400 to-green-600",
    },
    {
      title: "With - 사회적 고립청년 대상 서비스",
      year: "2024",
      description: "멋쟁이사자처럼 중앙 해커톤. 사회적 고립청년을 위한 커뮤니티 사이트",
      detailedDescription:
        "멋쟁이사자처럼 중앙 해커톤에 제출한 프로젝트입니다. 사회적 고립을 겪고 있는 청년들을 위한 온라인 커뮤니티 플랫폼입니다. 익명성을 보장하면서도 안전한 소통 공간을 제공하며, 전문가 상담, 그룹 활동, 멘토링 프로그램 등을 통해 사회 복귀를 지원합니다. 사용자 경험을 중시한 UI/UX 디자인에 특히 신경을 썼습니다.",
      url: "https://github.com/yerroong/Reverseinha_team_front.git",
      githubUrl: "https://github.com/yerroong/Reverseinha_team_front.git",
      liveUrl: "https://reverseinha.github.io/Reverseinha_team_front",
      image: "/with1.png",
      images: [
        "/with1.png",
        "/with2.png",
        "/with3.png",
        "/with4.png",
        "/with5.png",
      ],
      technologies: ["React", "JavaScript","Node.js", "MongoDB"],
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "가스/화재 안전 통합 시스템",
      year: "2024",
      description: "인하대 이노씽크 메이커톤/ 가스 및 화재 안전 관리를 위한 통합 안전 사이트",
      detailedDescription:
        "IoT 센서와 연동된 실시간 가스 및 화재 감지 시스템입니다. 센서 데이터를 실시간으로 모니터링하고, 위험 상황 발생 시 즉시 알림을 전송하며, 대응 매뉴얼을 제공합니다. 하드웨어와 소프트웨어를 통합한 종합적인 안전 관리 솔루션입니다. 직접 주거 모형을 제작하여 센서가 사이트에서 실제로 잘 동작하나 확인도 완료하였습니다.",
      url: "https://github.com/yerroong/2024innosafe",
      githubUrl: "https://github.com/yerroong/2024innosafe",
      notionUrl: "https://www.notion.so/yerin1412/2024-12b389b3e039807f86b3d1fef0e89e98",
      image: "/maker1.png",
      images: [
        "/maker1.png",
        "/maker2.png",
        "/maker3.png",
        "/maker4.png",
      ],
      technologies: ["React", "Arduino", "IoT", "Firebase"],
      color: "from-red-400 to-red-600",
    },
    {
      title: "Makourse",
      year: "2025",
      description: "일정 공유를 위한 애플리케이션 제작 프로젝트 메이코스 (vue.js)",
      detailedDescription:
        "출시를 목표로 3개월간 진행한 팀 프로젝트입니다(완성 완료 했지만 배포 X, 디자이너1, 프론트3, 백2). 메이코스 서비스는 개인간의 계획성 약속의 확실함을 제공해주고자 합니다. 약속을 짜고 구성하는데에 불편함을 해결해주는 어플리케이션입니다. 서비스 이름은 make + course(일정 코스, 데이트 코스할 때의 코스) Vue.js를 활용하여 반응형 인터페이스를 구현했으며, 주요 기능은 일행과 같이 약속 계획 짜기가 가능하며 특정 장소 및 계획에 시간설정/메모/대안 설정이 가능합니다.",
      url: "https://makourse.my/",
      githubUrl: "https://github.com/yerroong/makourse",
      liveUrl: "https://makourse.my/",
      image: "/makourse1.png",
      images: [
        "/makourse1.png",
        "/makourse2.png",
        "/makourse3.png",
        "/makourse4.png",
        "/makourse5.png",
      ],
      technologies: ["Vue.js", "Express.js", "MySQL", "WebSocket"],
      color: "from-teal-400 to-teal-600",
      isMobileApp: true,
    },
    {
      title: "HackDoc",
      year: "2025",
      description: "Build AI 2025 Upstage 트랙 3등 수상",
      detailedDescription:
        "HackDoc은 Upstage의 문서 파싱 및 정보 추출 기능을 활용해, 초보 개발자가 기술 문서를 더 쉽고 빠르게 이해하고 활용할 수 있도록 돕는 AI 도우미입니다. devfolio 사이트에서 시연 영상과 디테일한 내용을 확인할 수 있습니다.",
      githubUrl: "https://github.com/yerroong/BuildAI_Hackathon",
      devfolioUrl: "https://devfolio.co/projects/hack-doc-8415",
      image: "/HackDoc.png",
      images: [
        "/HackDoc.png",
      ],
      technologies: ["TypeScript", "Python", "Upstage API"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "<With IN> 인천 외국인 근로자 전용 산재 보험 가이드라인 앱",
      year: "2025",
      description:
        "인천시 국제협력국 다문화사회과'에 3000만원을 진행하며 현재 개발 중. 25년 9월 완성 목표",
      detailedDescription:
        "인하대학교 지역상생 아이디어 후속 프로젝트인 ‘인솔루션 프로젝트’입니다. 지역상생 아이디어 총장상을 받은 아이디어를 현실화하는 작업입니다. ‘인천시 국제협력국 다문화사회과’에 예산을 지원받아 총 7명의 인하대 학생(기획2명, 프론트2명, 백엔드2명, 디자이너1명)이 함께하며, 최종적으로 <With IN> 인천 외국인 근로자 전용 산재 보험 가이드라인 앱을 개발하여 외국인이 산재 보험을 편리하게 신청할 수 있도록 하는 것을 목표로 합니다. 9월까지 개발 마무리를 할 예정입니다.",
      githubUrl: "https://github.com/WithIN-Incheon/WithIN-FE",
      image: "/within4.jpg",
      images: [
        "/within1.jpg",
        "/within2.jpg",
        "/within3.jpg",
        "/within4.jpg",
      ],
      technologies: ["React", "TypeScript", "Vite", "zustand"],
      color: "from-indigo-400 to-indigo-600",
      isMobileApp: true,
    },
  ]

  const openModal = (project: any) => {
    const withPrefix = {
      ...project,
    };
    setSelectedProject(withPrefix);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            onClick={() => openModal(project)}
            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-0 bg-white cursor-pointer"
          >
            <div
              className={`relative overflow-hidden ${
                project.isMobileApp ? "h-64" : "h-56"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />
              {project.isMobileApp ? (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <Image
                    src={project.image ||"/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={850}
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                {project.year}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>

              {project.githubUrl && project.liveUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : project.githubUrl && project.notionUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Notion</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) :  project.githubUrl && project.devfolioUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.devfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Devfolio</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="mr-2">GitHub Link</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
    </>
  )
}