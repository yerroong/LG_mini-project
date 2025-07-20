import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutCombined() {
  const interests = [
    { title: "UI/UX Design", icon: "🎨", color: "from-pink-400 to-rose-500" },
    { title: "Frontend Development", icon: "💻", color: "from-blue-400 to-indigo-500" },
    { title: "Team Collaboration", icon: "🤝", color: "from-green-400 to-emerald-500" },
    { title: "Problem Solving", icon: "🧩", color: "from-purple-400 to-violet-500" },
  ]

  return (
    <div className="space-y-8">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                김예린은 프론트엔드 개발자가 되는 것을 목표로 하고 있으며,
                <span className="font-bold text-blue-600"> 각종 해커톤 및 프로젝트와 대외활동(AI/CV 학부연구생)</span>을 통해 소프트웨어 능력을 향상시키고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${interest.color} p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{interest.icon}</span>
                    <h3 className="font-semibold">{interest.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">사용가능한 툴 & 언어</h3>
              <p className="text-center text-gray-700">React, HTML/CSS, JavaScript, TypeScript, GitHub, Figma, C++</p>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700"></p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-blue-600">안녕하세요! 저는 김예린입니다!</span>
                <br />
                현재 인하대 정보통신공학과 4학년 재학중이며 프론트 뿐만 아니라 데이터베이스, 컴퓨터비전, ai에 관심을
                가져 학부 연구생을 비롯한 다양한 활동을 진행했으며 리더쉽과 소통 능력을 위해 학과 부회장을 하고 다양한
                프로젝트하는 등 다양한 노력을 해왔습니다👊
              </p>
            </div>

            {/* Center floating image */}
            <div className="relative">
              <div className="w-48 h-48 relative animate-float">
                <Image
                  src="/yerin.png"
                  alt="Floating illustration"
                  width={200}
                  height={200}
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 text-center lg:text-right">
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="font-semibold text-purple-600">MBTI는 INFJ</span>로 한가지 일에 빠지면 체계적으로
                탐구하고 공부하는 성격이에요! 😆 😆<br />
                앞으로도 꾸준히 공부하며 더욱 더 멋진 개발자로 성장해가기 위해 노력중입니다🤍
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
