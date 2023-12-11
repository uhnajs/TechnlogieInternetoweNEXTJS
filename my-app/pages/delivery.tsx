import { useState } from 'react'
import Layout from '../src/app/Layout'

export default function Delivery() {
    const [distance, setDistance] = useState('')
    const [cost, setCost] = useState(0)

    const calculateDeliveryCost = () => {
        // Przykładowa logika obliczania kosztów
        const deliveryCost = Number(distance) * 1.5 // 1.5 zł za km
        setCost(deliveryCost)
    }

    return (
        <Layout>
            <h1 className="text-4xl font-bold">Oblicz koszt dostawy pizzy</h1>
            <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="mt-3 border p-2"
                placeholder="Wpisz liczbę kilometrów"
            />
            <button
                onClick={calculateDeliveryCost}
                className="mt-3 bg-blue-500 text-white p-2 rounded"
            >
                Oblicz koszt
            </button>
            {cost > 0 && <p className="mt-3">Koszt dostawy wynosi: {cost} zł</p>}
        </Layout>
    )
}
