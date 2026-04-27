import { Reveal } from "./Reveal";
import { MapPin } from "lucide-react";

const REGIONS = [
  {
    name: "West Toronto",
    areas: [
      "Baby Point", "Bloor West Village", "High Park", "High Park North", 
      "Lambton", "Parkdale", "Roncesvalles", "Runnymede", "Swansea", 
      "The Junction", "West Bend"
    ]
  },
  {
    name: "Etobicoke",
    areas: [
      "Alderwood", "Chestnut Hills", "Eatonville", "Edenbridge", "Eringate", 
      "Glen Agar", "Humber Bay", "Humber Heights - Westmount", "Humber Valley", 
      "Islington", "Kingsview Village", "The Kingsway", "Lambton Mills", 
      "Long Branch", "Markland Wood", "Mimico", "New Toronto", "Norseman Heights", 
      "Old Mill", "Princess-Rosethorn", "The Queensway", "Richview", 
      "Royal York Gardens", "Stonegate", "Sunnylea", "Thorncrest Village", 
      "West Deane Park", "The West Mall", "The Westway", "Willowridge"
    ]
  },
  {
    name: "Mississauga",
    areas: [
      "Applewood", "Birchwood", "Clarkson", "Cooksville", "Dixie", "Erindale", 
      "Glen Leven", "Lakeview", "Lorne Park", "Mineola", "Mississauga Rd", 
      "Mississauga Valley", "Park Royal", "Port Credit", "Rattray Park Estates", 
      "Rockwood Village", "Sheridan", "Sherwood Forrest"
    ]
  }
];

export function AreasServed() {
  return (
    <section id="areas" className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brown)] uppercase">Where We Work</span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary uppercase">Areas We Serve</h2>
          <p className="mt-4 text-muted-foreground">
            We provide professional stump grinding services across West Toronto, Etobicoke, and Mississauga. 
            Don't see your neighborhood? Give us a call.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {REGIONS.map((region, ridx) => (
            <Reveal key={region.name} delay={ridx * 150} className="flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/10">
                <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                  <MapPin size={20} />
                </div>
                <h3 className="font-display text-2xl text-primary uppercase tracking-tight">
                  {region.name}
                </h3>
              </div>
              <ul className="grid grid-cols-1 gap-y-2.5">
                {region.areas.map((area) => (
                  <li key={area} className="flex items-center gap-2 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-brown/40 transition-all duration-300 group-hover:bg-brown group-hover:scale-125" />
                    <span className="text-charcoal/80 text-[15px] font-medium transition-colors group-hover:text-primary">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600} className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-charcoal/70 leading-relaxed italic">
            Don't see your neighborhood? We primarily focus on the historic canopies of Central & South Etobicoke, 
            Mississauga, and High Park to ensure prompt service. For large-scale projects north of the 401, 
            please contact us for a custom quote.
          </p>
        </Reveal>

        <Reveal delay={800} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-charcoal text-white shadow-xl">
            <p className="text-white/80 font-medium">Ready to clear your yard?</p>
            <a 
              href="https://clienthub.getjobber.com/hubs/e26093ba-9938-4ec5-b46f-0e1ed9977087/public/requests/4622022/new" 
              className="btn-primary py-3 px-6 text-sm"
            >
              Request A Quote
            </a>
          </div>
        </Reveal>


      </div>
    </section>
  );
}
