// You can be very strict about the value type of variable

let airplaneSeatAllotment: "asile" | "middle" | "window"

// You can only assign either "asile", "middle" or "window" to the variable now.
airplaneSeatAllotment = "middle"

// This is not assignable to the variable now.
/* airplaneSeatAllotment = "crew" */