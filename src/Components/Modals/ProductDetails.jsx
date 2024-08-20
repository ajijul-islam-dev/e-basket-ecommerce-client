import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
  Card,
  Checkbox,
} from "@material-tailwind/react";

export function ProductDetailsModal({ isProductOpen, handleCloseProductModal ,product}) {
  return (
    <section className="grid place-items-center relative">
      <Dialog className="p-2" size="lg" open={isProductOpen}>
        <DialogHeader className="justify-end">
          <IconButton
            color="gray"
            size="sm"
            variant="text"
            onClick={handleCloseProductModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll">
          <div className="grid grid-cols-2">
            <div className="">
                <img className="w-full h-full" src={product.image} alt="" />
            </div>
            <div className="">
                <h3 className="text-2xl font-semibold text-black">{product.name}</h3>
                <p className="text-sm font-semibold"></p>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </section>
  );
}

export default ProductDetailsModal;
