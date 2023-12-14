"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "@/firebase";

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
    useAppStore((state) => [
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
      state.filename,
    ]);
  const renameFile = async () => {
    if (!user || !fileId) return;
    const toastId = toast.loading("Renaming...");
    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });
    toast.success("Rename Success", {
      id: toastId,
    });
    setInput("");
    setIsRenameModalOpen(false);
  };
  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the file</DialogTitle>

          <Input
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            id="link"
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />

          <div className="flex justify-end space-x-2 py-3">
            <Button
              size="sm"
              className="px-3 flex-1"
              variant={"ghost"}
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

            <Button
              size="sm"
              type="submit"
              className="px-3 flex-1"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
