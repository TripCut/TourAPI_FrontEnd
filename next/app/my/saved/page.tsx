import Link from "next/link";
import { BottomNav } from "../../../components/home/BottomNav";

export default function MySavedPage() {
  return (
    <div className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-between">
      <main className="flex-1 pb-24">
        <header className="sticky top-0 z-10 bg-background px-4 pt-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-[var(--text-primary)]">저장한 장소</h1>
        </header>

        <div className="mt-4 space-y-3 px-4">
          {[{
            id: "goblin-spot",
            title: "도깨비 촬영지",
            address: "강릉시 정동진",
            imageUrl:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuADLVcEVpfn3GgQ498lKr1v7RCBsU1bmttqlzg1ZkFPDhp_i1gscmtHLCp1qturs-I6jJihMLY1GloXs2SGzdo6DN5xqE2k34Es3qpnr75Wk3na31Vx_nHJojaSCt674r-65YLk2LcEqScMg4BX123vhpZ-JmHGHG0Mog3XBct0PfG6OJPY_ETxy-qCb6XjUxzfHQ2S9WX24BtnaTCyZnvuJCBed7k79cywfTeHVDrZUduP-GTWVBD8UiNz4ussNqpwuoIUtOGgKWc",
          }, {
            id: "wind-blows-1",
            title: "바람이 분다 촬영지",
            address: "전남 순천시 순천만국가정원",
            imageUrl:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuASz3XSmAdfnS8Aok4-hF8cr_aE0qhK5kOYLoobMqVO-UGKnNHgh4eUK_bL-dhU0IzOFHXPvJcJVTQeC8BXBFPGN7jgC0ldRaTia3whh85-hGGWzVeFOJruGdpVrX001Xf27of_nz5hVQ3oGEDnXuhMcdd4YavUuswxpAAxRvrFcqSRx0mwkxdyRz5MaaciMPLCzbHxHDjeRuZOCfjnuHI2bKOUKfcJqB8uPuBrDB_lAa69-Agv8wFR84NYpmZsjmiV8XnfgYdY9-g",
          }].map((p) => (
            <Link key={p.id} href={`/places/${p.id}`} className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm">
              <div
                className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${p.imageUrl})` }}
              />
              <div className="flex-1">
                <p className="font-semibold text-[var(--text-primary)]">{p.title}</p>
                <p className="text-sm text-[var(--text-primary)]">{p.address}</p>
              </div>
              <span className="material-symbols-outlined text-[var(--text-secondary)]">chevron_right</span>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav active="my" />
    </div>
  );
}


