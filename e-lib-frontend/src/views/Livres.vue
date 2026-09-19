<template>
    <div class="max-w-5xl mx-auto p-6">
        <!-- Titre et recherche -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Livres disponibles</h1>
            <input type="text" placeholder="Rechercher par titre, auteur..."
                class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <!-- Table -->
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <table class="w-full text-left text-sm text-gray-600">
                <thead class="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                    <tr>
                        <th class="py-3 px-4">Titre</th>
                        <th class="py-3 px-4">Auteur</th>
                        <th class="py-3 px-4">Date de publication</th>
                        <th class="py-3 px-4">Statut</th>
                        <th class="py-3 px-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="i in 10" class="hover:bg-gray-50 transition">
                        <td class="py-3 px-4 font-medium text-gray-900">La chèvre de mon père</td>
                        <td class="py-3 px-4">Jordy G.</td>
                        <td class="py-3 px-4">10/10/2010</td>
                        <td class="py-3 px-4">
                            <span
                                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                Disponible
                            </span>
                        </td>
                        <td class="py-3 px-4 text-right">
                            <button class="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                                Voir détails
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>