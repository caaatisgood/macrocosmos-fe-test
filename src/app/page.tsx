"use client"

import { useEffect, useState } from 'react';

import { Miner } from '@/types/miner.types';

import Modal, { useModal } from '../components/Modal'

type Sort = "asc" | "desc" | undefined
type SortField = "username" | "taoEarned" | "blocksMined" | "ip" | "location"

export default function Home() {
  const [miners, setMiners] = useState<Miner[]>([])
  const [sortOptions, setSortOptions] = useState<Record<SortField, Sort>>({
    username: undefined,
    taoEarned: undefined,
    blocksMined: undefined,
    ip: undefined,
    location: undefined,
  })
  const [selectedMiner, setSelectedMiner] = useState<Miner | null>(null);
  const { isOpen, onOpen, onClose } = useModal();

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then((result: { data: Miner[] }) => {
        setMiners(result.data)
      })
  }, [])

  const handleSort = (key: SortField) => () => {
    setSortOptions((prevOptions) => {
      const newSort = prevOptions[key] === "asc" ? "desc" : "asc"
      setMiners(prevMiners => {
        return [...prevMiners].sort((a, b) => {
          if (typeof a[key] === 'string') {
            if (newSort === "asc") {
              // @ts-ignore
              return a[key].localeCompare(b[key]);
            } else {
              // @ts-ignore
              return b[key].localeCompare(a[key]);
            }
          } else {
            if (newSort === "asc") {
              // @ts-ignore
              return a[key] - b[key];
            } else {
              // @ts-ignore
              return b[key] - a[key];
            }
          }
        });
      });
      return {
        ...prevOptions,
        [key]: prevOptions[key] === "asc" ? "desc" : "asc",
      }
    })
  }

  const handleMinerClick = (miner: Miner) => {
    setSelectedMiner(miner);
    onOpen();
  }

  return (
    <main>
      <h1>Welcome to Bittensor Miners!</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-2 md:px-6 text-left cursor-pointer" onClick={handleSort("username")}>
                Username {!sortOptions.username ? null : sortOptions.username === "asc" ? "↑" : "↓"}
              </th>
              <th className="py-3 px-2 md:px-6 text-left cursor-pointer" onClick={handleSort("ip")}>
                IP Address {!sortOptions.ip ? null : sortOptions.ip === "asc" ? "↑" : "↓"}
              </th>
              <th className="py-3 px-2 md:px-6 text-left cursor-pointer" onClick={handleSort("location")}>
                Location {!sortOptions.location ? null : sortOptions.location === "asc" ? "↑" : "↓"}
              </th>
              <th className="py-3 px-2 md:px-6 text-left cursor-pointer" onClick={handleSort("taoEarned")}>
                Tao Earned {!sortOptions.taoEarned ? null : sortOptions.taoEarned === "asc" ? "↑" : "↓"}
              </th>
              <th className="py-3 px-2 md:px-6 text-left cursor-pointer" onClick={handleSort("blocksMined")}>
                Blocks Mined {!sortOptions.blocksMined ? null : sortOptions.blocksMined === "asc" ? "↑" : "↓"}
              </th>
            </tr>
          </thead>
          <tbody>
            {miners?.map((miner, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  <span className='underline cursor-pointer' onClick={() => handleMinerClick(miner)}>
                  {miner.username}
                </span>
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">{miner.ip}</td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">{miner.location}</td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">{miner.taoEarned}</td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">{miner.blocksMined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && selectedMiner && (
        <Modal onClose={onClose}>
          <div>
            <h2>Miner Details</h2>
            <code className="whitespace-pre-wrap">{JSON.stringify(selectedMiner, null, 2)}</code>
          </div>
        </Modal>
      )}
    </main>
  );
}
