import { Users, DollarSign, CheckSquare } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DashboardCard } from "../components/dashboard-card";
import { dummyChartData } from "../mock/dummyChartData";
import { useTranslate } from "../context/lang-context";
import { dummyClients } from "../mock/dummyClients";
import { dummyDeals } from "../mock/dummyDeals";
import { dummyTasks } from "../mock/dummyTasks";

export function DashboardPage() {
  const { t } = useTranslate();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t.dashboard}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title={t.clients}
          icon={<Users />}
          value={dummyClients.length}
        />
        <DashboardCard
          title={t.deals}
          icon={<DollarSign />}
          value={dummyDeals.length}
        />
        <DashboardCard
          title={t.tasks}
          icon={<CheckSquare />}
          value={dummyTasks.length}
        />
      </div>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium mb-4">{t.salesOverview}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium mb-4">{t.recentActivity}</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Users className="mr-2 text-indigo-600" />
              <span>{t.newClientAdded} Acme Corp</span>
            </li>
            <li className="flex items-center">
              <DollarSign className="mr-2 text-green-600" />
              <span>{t.dealClosed} Globex Inc</span>
            </li>
            <li className="flex items-center">
              <CheckSquare className="mr-2 text-blue-600" />
              <span>{t.taskCompleted} Follow up with Initech</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
