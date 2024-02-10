import { Button } from "./button";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Input } from "./input";
import { Label } from "./label";

export function DialogContentReady(){
  const ShopName = "Pizza Shop";
  const ShopDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <DialogContent className="bg-zinc-950 border-zinc-800">
    <DialogHeader>
      <DialogTitle>Profile</DialogTitle>
      <DialogDescription>
        Update the information of your store visible to your
        customer.
      </DialogDescription>
      <form className="pt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Label htmlFor="shop-name">Name</Label>
          <Input
            value={ShopName}
            type="text"
            id="shop-name"
            className="border-zinc-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="shop-description">Description</Label>
          <textarea
            value={ShopDescription}
            id="shop-name"
            className="h-20 bg-transparent border border-zinc-200 rounded px-2 py-1.5 outline-none text-sm"
          ></textarea>
        </div>
        <div className="flex justify-end gap-5">
          <DialogClose asChild>
            <Button variant={"secondary"}>Cancel</Button>
          </DialogClose>

          <Button type="submit" variant={"secondary"} className="bg-emerald-500 hover:bg-emerald-600 text-white">Save Changes</Button>
        </div>
      </form>
    </DialogHeader>
  </DialogContent>
  )
}