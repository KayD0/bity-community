import React from "react";
import "../app.css";

export default function About() {
  return (
    <main style={{ padding: "2rem", color: "black" }}>
      <h1 className="text-3xl font-bold mb-4 animate-fadeIn">Bity♪について</h1>
      <section className="mb-6 animate-slideIn">
        <p>
          Bity（ビティ）とは、ITは最小単位bitを積み重ねてできているので、そのbitを一つ一つ積み重ねて成長していくという造語です。
        </p>
        <p>
          その造語に楽しいという意味の「♪」を付けて、コミュニティー名を「Bity♪」にしております。
        </p>
      </section>

      <section className="mb-6 animate-slideIn">
        <h2 className="text-2xl font-semibold mb-2">Bity♪の目標・想い</h2>
        <ul className="list-disc pl-6">
          <li>子どもたち、将来のために、勉学に励み、世に貢献する</li>
        </ul>
      </section>

      <section className="mb-6 animate-slideIn">
        <h2 className="text-2xl font-semibold mb-2">ミッション</h2>
        <ul className="list-disc pl-6">
          <li>人格とキャリアを共に形成し、IT業界、そして日本の在るべき姿を取り戻していく</li>
          <li>各自の役割を全うし、応援し合う（和を以って尊しと為す）</li>
        </ul>
      </section>

      <section className="mb-6 animate-slideIn">
        <h2 className="text-2xl font-semibold mb-2">コンセプト</h2>
        <ul className="list-disc pl-6">
          <li>ITの最小単位であるbitを積み重ねるが如く、1歩を地道に積み重ねていく。</li>
          <li>みんなで楽しく・学ぶ・成長する。</li>
        </ul>
      </section>

      <section className="mb-6 animate-slideIn">
        <h2 className="text-2xl font-semibold mb-2">Bityのイベント内容</h2>
        <ul className="list-disc pl-6">
          <li>ITもくもく勉強会</li>
          <li>交流会（ゲーム会、飲み会、花見など）</li>
          <li>相談会・MTG（キャリア、フリーランス相談など）</li>
          <li>社会貢献（ゴミ拾い） 等</li>
        </ul>
      </section>
    </main>
  );
}
