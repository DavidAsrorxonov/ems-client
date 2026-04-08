import { toast } from "sonner";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <Button
        onClick={() => {
          toast.success("Clicked");
        }}
      >
        Click
      </Button>
    </>
  );
};

export default App;
