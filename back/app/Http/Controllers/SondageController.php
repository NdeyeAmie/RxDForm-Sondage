<?php

namespace App\Http\Controllers;
use App\Models\Sondage;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SondageController extends Controller
{

/**
     * Récupère la liste des sondages.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sondages = Sondage::all();
        return response()->json($sondages, 200);
    }

    /**
     * Récupère les détails d'un sondage spécifique.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sondage = Sondage::find($id);

        if (!$sondage) {
            return response()->json(['message' => 'Sondage non trouvé'], 404);
        }

        return response()->json($sondage, 200);
    }

    /**
     * Crée un nouveau sondage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validation des données
        $validator = Validator::make($request->all(), [
            'question' => 'required|string',
            'options' => 'required|array|min:2',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Création du sondage
        $sondage = Sondage::create([
            'question' => $request->input('question'),
            'options' => $request->input('options'),
        ]);

        return response()->json($sondage, 201);
    }

    /**
     * Met à jour un sondage existant.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validation des données
        $validator = Validator::make($request->all(), [
            'question' => 'required|string',
            'options' => 'required|array|min:2',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Mise à jour du sondage
        $sondage = Sondage::find($id);

        if (!$sondage) {
            return response()->json(['message' => 'Sondage non trouvé'], 404);
        }

        $sondage->update([
            'question' => $request->input('question'),
            'options' => $request->input('options'),
        ]);

        return response()->json($sondage, 200);
    }

    /**
     * Supprime un sondage spécifique.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sondage = Sondage::find($id);

        if (!$sondage) {
            return response()->json(['message' => 'Sondage non trouvé'], 404);
        }

        $sondage->delete();

        return response()->json(['message' => 'Sondage supprimé avec succès'], 204);
    }
}
