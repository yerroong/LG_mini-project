// 산재 보험 급여 안내
import { useState } from "react";
import Header from "../../../components/Header/Header";
import BottomBar from "../../../components/BottomBar/BottomBar";
import "./InfoSalaryPage.css";

type Item = {
  key: string;
  title: string;
  content: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    key: "yo",
    title: "요양급여",
    content: (
      <>
        <p>
          근로자가 업무 상의 사유로 부상을 당하거나 질병에 걸린 경우 지급하는 급여.
          산재보험 의료기관에서 요양하게 되며 부득이한 경우 요양 대신 요양비를 지급받을 수 있음.
          <br /><br />
          • 3일 이내의 요양으로 치유될 수 있으면 요양급여를 지급하지 아니함
          •  예시: 하루 병원비 10만 원, 20일 치료 시 총 200만 원 지급 가능
        </p>
        <p>
          <strong>종류</strong>
          <br />• 진료비: 치료에 소요된 병원 비용
          <br />• 간병료: 간병에 따른 비용
          <br />• 이송료: 통원치료 등에 따른 이송 비용
          <br />• 기타: 보조기 등 본인이 직접 낸 치료 비용
        </p>
      </>
    ),
  },
  {
    key: "rest",
    title: "휴업급여",
    content: (
      <p>
        휴업급여는 업무상 사유로 부상을 당하거나 질병에 걸린 근로자에게 요양으로 취업하지 못한 기간에 대해 지급하되,
        1일당 지급액은 평균임금의 70%에 해당합니다.
        <br /><br />• 요양으로 취업하지 못한 기간이 3일 이내인 경우 미지급
        • 하루 평균임금 70% 지급(2025년 최저 48,232원)
        <br />• 예시: 평균임금 10만 원, 20일 휴업 → 1일 7만 원 × 20일 = 140만 원 지급
      </p>
    ),
  },
  {
    key: "disability",
    title: "장해급여",
    content: (
      <p>
        부상·질병이 치유된 후 신체 등에 장해가 있는 경우 지급하는 급여. 수급권자 선택에 따라
        장해보상연금 또는 장해보상일시금 지급(1~3급은 연금만, 외국 거주자는 일시금만)
        <br /><br />• 예시: 중증 4급으로 일시금 800만 원 또는 연금 월 50만 원 선택 가능
      </p>
    ),
  },
  {
    key: "care",
    title: "간병급여",
    content: (
      <p>
        치유 후 본인에게 간병이 계속 필요할 때 실제로 간병을 받은 기간 기준으로 지급
        <br /><br />• 예시: 일당 약 5만 원, 2개월 간병 시 약 300만 원 가능
      </p>
    ),
  },
  {
    key: "survivor",
    title: "유족급여",
    content: (
      <p>
        업무상 사망 시 유족에게 지급. 유족보상연금 또는 유족보상일시금 중 지급(연금 대상 유족이 없으면 일시금)
        <br /><br />• 예시: 배우자+2자녀 유족, 연금 월 250만 원 가능
      </p>
    ),
  },
  {
    key: "rehab",
    title: "직업재활급여",
    content: (
      <>
        <p>
          재해로 감소한 노동력의 직업복귀와 사회복귀를 지원
          <br /><br />
          ① 직업훈련 비용·직업훈련수당(학비·교재비·실습비 등 + 생계성 수당)
          ② 직장복귀지원금·직장적응훈련비·재활운동비(복귀 격려/적응·재활운동 비용)
        </p>
      </>
    ),
  },
  {
    key: "longterm",
    title: "상병보상연금",
    content: (
      <p>
      요양급여를 받는 근로자가 요양을 시작한지 2년이 지난 날 이후에 다음 조건을 모두 만족하는 상태가 계속될 시 휴업급여 대신 지급하는 급여
      <br /><br />
      ① 부상이나 질병이 치유되지 아니한 상태일 것<br />
      ② 부상이나 질병에 따른 중증요양상태의 정도가 대통령령으로 정한 중증요양상태 등급 기준에 해당할 것
      ③ 요양으로 인하여 취업하지 못하였을 것<br />
      </p>
    ),
  },
  {
    key: "funeral",
    title: "장례비",
    content: (
      <>
        <p>
          업무상 사망자의 장례를 지낸 유족에게 지급되는 급여 "유족"이란 배우자·자녀·부모·손자녀·조부모·형제자매
        </p>
        <details>
          <summary>더보기</summary>
          <p>
            ① 기본 지급 원칙<br/>
            • 업무상 사망 시, 평균임금의 120일분 금액을 장례 집행 유족에게 지급
            • 유족이 없거나 유족이 아닌 사람이 부득이하게 장례를 치를 경우 실제비용만 지급<br/>

            ② 최고·최저 금액 제한<br />
            • 고용노동부장관 고시 기준의 '최고금액'을 초과하거나 '최저금액'에 미달하면, 각각 최고금액 또는 최저금액만 지급<br /> 
            
            ③ 사망 추정 시 선지급<br /> 
            • 근로자가 업무상 사유로 사망하였다고 대통령령에 따라 '추정'되는 경우, 장례를 치르기 전이라도 유족의 청구로 최저금액을 미리 지급 가능함
            • 이때 유족 순위는 유족급여 기준(제65조)을 따름<br /><br />

            ④ 금액 조정<br />
            • 사망 추정으로 선지급한 장례비가 있으면, 나중에 실제 장례비를 산정할 때 이미 지급된 금액을 뺀 나머지만 추가 지급함
          </p>
        </details>
      </>
    ),
  },
  {
    key: "silicosis",
    title: "진폐보상",
    content: (
      <>
        <p>
          분진 노출로 인한 만성 폐질환인 진폐에 대한 특례 급여
          <br /><br />
          • 요양급여·간병급여·장례비·직업재활급여·진폐보상연금·진폐유족연금 등으로 구성됨<br />
          • 신청·지급은 「산업재해보상보험법」의 진폐 특례 규정을 따름
        </p>
      </>
    ),
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="acc-item">
      <button
        type="button"
        className="acc-trigger"
        aria-expanded={isOpen}
        aria-controls={`panel-${item.key}`}
        onClick={onToggle}
      >
        <span className="acc-trigger__label">{item.title}</span>
        <img
          className="acc-trigger__icon"
          src={isOpen ? "/Info/arrow-up.svg" : "/Info/arrow-down.svg"}
          width={6}
          height={11}
          alt=""
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id={`panel-${item.key}`}
          role="region"
          aria-labelledby={`btn-${item.key}`}
          className="acc-panel"
        >
          {item.content}
        </div>
      )}
    </div>
  );
}

export default function InfoSalaryPage() {
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="salary-page">
      <Header title="산재 보험 급여 안내" />

      <main className="salary-content">
        {/* 페이지 타이틀 */}
        <h1 className="salary-title">산재 보험 급여 종류</h1>

        {/* 아코디언 리스트 */}
        <section className="salary-accordion">
          {ITEMS.map((it) => (
            <AccordionItem
              key={it.key}
              item={it}
              isOpen={!!openKeys[it.key]}
              onToggle={() => toggle(it.key)}
            />
          ))}
        </section>
      </main>

      <BottomBar />
    </div>
  );
}