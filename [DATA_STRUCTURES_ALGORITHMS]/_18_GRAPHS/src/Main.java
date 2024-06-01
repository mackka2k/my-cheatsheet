import java.util.*;

class Grafas {
    private int viršūniųSkaičius; // Viršūnių skaičius
    private LinkedList<Integer> sąsajosSąrašas[]; // Kaimynystės sąrašo atvaizdavimas

    // Konstruktorius
    Grafas(int v) {
        viršūniųSkaičius = v;
        sąsajosSąrašas = new LinkedList[v];
        for (int i = 0; i < v; ++i)
            sąsajosSąrašas[i] = new LinkedList();
    }

    // Funkcija, skirta pridėti briauną į grafą
    void pridėtiBriauną(int v, int w) {
        sąsajosSąrašas[v].add(w);
    }

    // Funkcija, skirta spausdinti grafo kaimynystės sąrašo atvaizdavimą
    void spausdintiGrafą() {
        for (int i = 0; i < viršūniųSkaičius; ++i) {
            System.out.print("Viršūnė " + i + " susijusi su: ");
            if (!sąsajosSąrašas[i].isEmpty()) {
                for (int j = 0; j < sąsajosSąrašas[i].size(); j++) {
                    System.out.print(sąsajosSąrašas[i].get(j));
                    if (j != sąsajosSąrašas[i].size() - 1)
                        System.out.print(", ");
                }
            } else {
                System.out.print("niekuo");
            }
            System.out.println();
        }
    }
}

public class Main {
    public static void main(String args[]) {
        // Sukurti grafą su 5 viršūnėmis
        Grafas grafas = new Grafas(5);

        // Pridėti briaunas
        grafas.pridėtiBriauną(0, 1);
        grafas.pridėtiBriauną(0, 4);
        grafas.pridėtiBriauną(1, 2);
        grafas.pridėtiBriauną(1, 3);
        grafas.pridėtiBriauną(1, 4);
        grafas.pridėtiBriauną(2, 3);
        grafas.pridėtiBriauną(3, 4);

        // Spausdinti grafą
        grafas.spausdintiGrafą();
    }
}
