var data = {
            "Allergies": [
            	"Astelin","Benadryl","Clarinex","Decadron","Entocort","Flonase","Nasonex nasal spray","Periactin","Phenergan","Quibron-t","Rhinocort","Serevent","Seroflo","Zyrtec"
            ],
            "Antibiotics": [
				"Amoxil", "Ampicillin", "Augmentin", "Bactrim", "Biaxi", "Cefixime", "Ceftin", "Ciplox", "Cleocin", "Doxycyclin", "Erythromycin", "Floxin", "Fucidin$", "Keflex", "Keftab", "Minocin", "Minomycin", "Myambutol", "Noroxin", "Omnicef", "Panmycin", "Roxithromycin", "Stromectol", "Suprax", "Trimox", "Vanti", "Zithroma"
            ],
            "Birth Control": [
				"Alesse","Levlen","Mircett", "Yasmin"
			],
			"Depression": [
				"Amitriptyline", "Anafranil", "Bupron SR", "Bupropion", "Celexa", "Citalopram", "Clozaril", "Cymbalt", "Desyrel", "Effexor XR", "Elavil", "Emsam", "Endep", "Isoniazid", "Lexapro", "Lithium", "Pamelor", "Paroxetine", "Paxi", "Pristi", "Remeron", "Sinequan", "Trazodone", "Venlor", "Wellbutrin", "Wellbutrin SR", "Zoloft", "Zyban"
            ],
			"Diabetes": [
				"Actoplus Met", "Actos", "Amaryl", "Avapr", "Benfotiamine", "Cozaar", "Diabecon", "Duetac", "Glucophage", "Glucotrol XL", "Glycome", "Januvia", "Metformin", "Micronase", "Prandin", "Precose"
			],
			"Heart Disease": [
				"Abana","Albendazol","Aldacton","Altac","Atorlip-1","Atorlip-2","Atorlip-","Betapac","Bystoli","Cala","Cardize","Core","Digoxi","Diova","Plavi","Prednisolon","Priniv","Procardi","Propranolo","Tenormi","Toprol X","Torsemid","Vasote","Zestri"
			],
			"Pain Relief": [
				"Aleve","Anacin","Arcoxia","Artane","Aspirin$","Azulfidine","Benemid","Cafergot","Colospa","Diclofenac Gel","Elavil","Flexisyn$","Imitrex","Imuran","Lioresa","Maxalt","Mestinon","Mobic","Motrin","Naprosyn","Nimotop","Periactin","Phenergan","Pletal","Ponstel","Prednison","Probala","Pyridium","Rumalaya$","Rumalaya forte$","Rumalaya gel$","Rumalaya liniment$","Shallaki$","Tegreto","Torado","Urispas","Voltaren","Voveran","Voveran sr"
			]
        };

        typeof $.typeahead === 'function' && $.typeahead({
            input: ".js-typeahead-input",
            minLength: 1,
            maxItem: 15,
            order: "asc",
            hint: true,
            group: {
                template: "{{group}} beers!"
            },
            maxItemPerGroup: 5,
            dropdownFilter: "all beers",
            emptyTemplate: 'No result for "{{query}}"',
            source: {
                ale: {
                    data: data.ale
                },
                lager: {
                    data: data.lager
                },
                "stout and porter": {
                    data: data.stout
                },
                malt: {
                    data: data.malt
                }
            },
            callback: {
                onClickAfter: function (node, a, item, event) {

                    // href key gets added inside item from options.href configuration
                    alert(item.href);

                }
            },
            debug: true
        });