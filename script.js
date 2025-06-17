const steps = [
  {
    image: "images/motherboard.png",
    instruction: "Step 2: Install the motherboard into the case.",
    confirm: "Motherboard installed!"
  },
  {
    image: "images/cpu_intel.png",
    instruction: "Step 3: Insert the CPU into the socket.",
    confirm: "CPU seated properly!"
  },
  {
    image: "images/ram_8gb.png",
    instruction: "Step 4: Add your RAM sticks.",
    confirm: "RAM installed!"
  },
  {
    image: "images/gpu_nvidia.png",
    instruction: "Step 5: Connect the GPU to the PCIe slot.",
    confirm: "GPU is in!"
  },
  {
    image: "images/power.png",
    instruction: "Step 6: Connect power supply cables.",
    confirm: "Power connected! Your PC is ready!"
  }
];

let currentStep = -1;

const partImage = document.getElementById("part-image");
const instruction = document.getElementById("instruction");
const button = document.getElementById("action-button");
const status = document.getElementById("status");

button.addEventListener("click", () => {
  currentStep++;
  if (currentStep < steps.length) {
    const step = steps[currentStep];
    partImage.src = step.image;
    instruction.textContent = step.instruction;
    status.textContent = step.confirm;
    button.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
  } else {
    instruction.textContent = "Build complete! Great job.";
    status.textContent = "✅ PC fully assembled.";
    button.style.display = "none";
  }
});
