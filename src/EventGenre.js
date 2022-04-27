import React, { useEffect, useState }  from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

  const color = [
    "#0088FE", 
    "#00C49F",
    "#FFBB28", 
    "#FF8042",
    "#480CA8"
  ]

  const [data, setData] = useState([]);

  useEffect(() => { 
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) => 
          summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value};
      });
      return data.filter((genre) => { return genre.value > 0 });
    };
    setData(() => getData());
  }, [events]);



  return (
    <ResponsiveContainer width={400} height={400}>
      <PieChart height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color[index % color.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;