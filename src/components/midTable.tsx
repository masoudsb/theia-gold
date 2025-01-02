import "@/style/midTable.css"

export default function MidTable() {
	const metal = [
		{
			name: "Gold 990",
			last: "85.29",
			day: "+0.38",
			img :"/gold990.png"
		},
		{
			name: "Gold 750",
			last: "78.87",
			day: "-0.43",
			img :"/gold750.png"
		},
		{
			name: "Silver 999",
			last: "0.98",
			day: "+0.56",
			img :"/silver999.png"
		},
		{
			name: "Silver 750",
			last: "0.73",
			day: "-0.38",
			img :"/silver750.png"
		},
		{
			name: "Platinum",
			last: "29.69",
			day: "-0.21",
			img :"/platinum.png"
		},
	]
    return (
        <>
          

<table className="container mid-table z-10">
	<thead className="tit" >
		<tr>
			<th><h2>Name</h2></th>
			<th><h2>Last Price</h2></th>
			<th><h2>24h Change</h2></th>
			<th><h2>Last 24h</h2></th>
		</tr>
	</thead>
				<tbody>
					{metal.map((item) => (
						<tr key={item.name}>
							<td>{item.name}</td>
							<td>$ {item.last} g</td>
							<td>{item.day} %</td>
							<td><img src={item.img} alt={item.name} /></td>
						</tr>
					))}
	</tbody>
</table>
        </>
    )
}