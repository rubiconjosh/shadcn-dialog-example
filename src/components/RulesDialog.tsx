import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RulesDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"}>Rules Button</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rules</DialogTitle>
          <DialogDescription>
            Edison bulb pinterest distillery freegan cliche gorpcore. Vaporware
            selfies pug grailed kickstarter pork belly, humblebrag before they
            sold out paleo freegan waistcoat quinoa. Tousled cloud bread roof
            party, tumeric shoreditch gastropub swag lomo coloring book. Cupping
            adaptogen hell of tilde, locavore lumbersexual ascot franzen tacos
            bodega boys etsy. Godard prism man braid neutra bodega boys bruh.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger>
            <Button variant={"outline"}>Close</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
