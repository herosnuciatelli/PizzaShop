import { DollarSignIcon, UtensilsIcon } from 'lucide-react'
import {
  DashboardCard,
  DashboardCardCurrency,
  DashboardCardDescription,
  DashboardCardTitle,
  DashboardCardValue,
} from '../../../components/DashboardCard'
import LineChart from '../../../components/LineChart'
import DonutChart from '../../../components/DonutChart'

export default function Home() {
  return (
    <main className="px-10">
      <div className="py-10">
        <h2 className="font-bold text-4xl">Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 ">
        <DashboardCard>
          <DashboardCardTitle>
            <h3>Recipe(month)</h3>
            <DollarSignIcon className="w-4 text-zinc-300" />
          </DashboardCardTitle>
          <DashboardCardCurrency>1560.98</DashboardCardCurrency>
          <DashboardCardDescription>+53%</DashboardCardDescription>
        </DashboardCard>

        <DashboardCard>
          <DashboardCardTitle>
            <h3>Orders(month)</h3>
            <UtensilsIcon className="w-4 text-zinc-300" />
          </DashboardCardTitle>
          <DashboardCardValue>78</DashboardCardValue>
          <DashboardCardDescription>+53%</DashboardCardDescription>
        </DashboardCard>

        <DashboardCard>
          <DashboardCardTitle>
            <h3>Orders(day)</h3>
            <UtensilsIcon className="w-4 text-zinc-300" />
          </DashboardCardTitle>
          <DashboardCardValue>0</DashboardCardValue>
          <DashboardCardDescription>+0%</DashboardCardDescription>
        </DashboardCard>

        <DashboardCard>
          <DashboardCardTitle>
            <h3>Cancel(month)</h3>
            <DollarSignIcon className="w-4 text-zinc-300" />
          </DashboardCardTitle>
          <DashboardCardValue>14</DashboardCardValue>
          <DashboardCardDescription>-30%</DashboardCardDescription>
        </DashboardCard>
      </div>
      <div className="flex flex-col py-10 gap-5 lg:flex-row h-full">
        <div className="border border-zinc-800 px-7 py-10 w-full flex flex-col gap-5 lg:w-3/5">
          <div>
            <div className="flex flex-col">
              <h3>Period recipe</h3>
              <span className="text-sm text-zinc-300">
                Daily recipe in period
              </span>
            </div>
            <div></div>
          </div>
          <LineChart />
        </div>
        <div className="border border-zinc-800 px-7 py-10 w-full flex flex-col gap-5 lg:w-2/5">
          <div>
            <div className="flex flex-col">
              <h3>Popular products</h3>
            </div>
          </div>
          <DonutChart />
        </div>
      </div>
    </main>
  )
}
