import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"}>About Button</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About</DialogTitle>
          <DialogDescription>
            I baby seitan sustainable artisan helvetica enamel pin iceland
            franzen lomo actually palo santo. Lomo flannel bodega boys banjo
            kogi raw denim ennui four loko tousled man bun chia microdosing
            tumblr unicorn next level. Truffaut unicorn solarpunk photo booth
            schlitz DIY tousled actually flexitarian vegan YOLO. Jawn lyft tofu,
            wolf farm-to-table helvetica pitchfork messenger bag gorpcore
            cold-pressed dreamcatcher. Same big mood semiotics master cleanse yr
            kogi small batch fingerstache PBR&B.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
