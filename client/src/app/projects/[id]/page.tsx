"use client";

import ModalNewTask from "@/components/ModalNewTask";
import { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../BoardView";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <section>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </section>
  );
};

export default Project;
